package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data

public class AttribuiteType {
    private Long id;
    private String name;
    private String dataType;
    private LocalDateTime createAt;
    private LocalDateTime modifiedAt;

}
