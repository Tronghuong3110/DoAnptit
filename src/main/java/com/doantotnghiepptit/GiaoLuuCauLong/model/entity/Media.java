package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "media")
@Entity
public class Media {
    @Id
    private Long id;
    private String path;
    @Column(name = "description", columnDefinition = "text")
    private String description;
    private String type;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "complex_id")
    private Complex complex;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;
}
