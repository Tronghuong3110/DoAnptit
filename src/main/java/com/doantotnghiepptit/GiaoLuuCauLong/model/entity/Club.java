package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "club")
public class Club {
    @Id
    private Long id;
    private String numberNumber;
    private String name;
    private LocalDateTime createAt;
    @Column(name = "description", columnDefinition = "text")
    private String description;
    private String incorporation;
}
